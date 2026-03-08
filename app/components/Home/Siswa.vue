<script setup lang="ts">
import type { TableColumn } from '@nuxt/ui'
import { getPaginationRowModel } from '@tanstack/vue-table'

interface Siswa {
  id: number
  nama: string
  kelas: number
  jk: string
  usia: number
  nis: number
}

const { data, status, error } = await useFetch<Siswa[]>('/api/siswa', {
  key: 'siswa-data',
})

const { totalSiswa, totalLakiLaki, totalPerempuan, perKelas } = useSiswaStats(data)

const columns: TableColumn<Siswa>[] = [
  {
    accessorKey: 'id',
    header: '#',
  },
  {
    accessorKey: 'nis',
    header: 'NIS',
  },
  {
    accessorKey: 'nama',
    header: 'Nama',
  },
  {
    accessorKey: 'jk',
    header: 'L/P',
  },
  {
    accessorKey: 'kelas',
    header: 'Kelas',
  },
  {
    accessorKey: 'usia',
    header: 'Usia',
  },
]

const pagination = ref({
  pageIndex: 0,
  pageSize: 10,
})

const globalFilter = ref('')

const table = useTemplateRef('table')
</script>

<template>
  <UContainer class="py-12">
    <div v-if="status === 'pending'" class="text-center font-medium">
      Memuat Data Siswa...
    </div>
    <div v-else-if="error" class="text-center text-red-500 font-medium">
      Gagal memuat data: {{ error.message }}
    </div>
    <div v-else class="space-y-6">
      <div class="font-bold text-2xl">
        Data Rekapitulasi Siswa
      </div>

      <!-- Menampilkan Ringkasan (Stats) Menggunakan Card/Kotak Rapi -->
      <div class="grid grid-cols-2 sm:grid-cols-4 gap-4">
        <div class="p-4 border border-accented rounded-lg bg-default">
          <p class="text-sm font-medium text-neutral-500 dark:text-neutral-400">
            Total Siswa
          </p>
          <p class="text-3xl font-bold mt-1 text-primary">
            {{ totalSiswa }}
          </p>
        </div>
        <div class="p-4 border border-accented rounded-lg bg-default">
          <p class="text-sm font-medium text-neutral-500 dark:text-neutral-400">
            Laki-laki (L)
          </p>
          <p class="text-3xl font-bold mt-1 text-blue-500">
            {{ totalLakiLaki }}
          </p>
        </div>
        <div class="p-4 border border-accented rounded-lg bg-default">
          <p class="text-sm font-medium text-neutral-500 dark:text-neutral-400">
            Perempuan (P)
          </p>
          <p class="text-3xl font-bold mt-1 text-pink-500">
            {{ totalPerempuan }}
          </p>
        </div>
        <div class="p-4 border border-accented rounded-lg bg-default">
          <p class="text-sm font-medium text-neutral-500 dark:text-neutral-400">
            Rombongan Belajar
          </p>
          <p class="text-3xl font-bold mt-1 text-amber-500">
            {{ Object.keys(perKelas).length }} Rombel
          </p>
        </div>
      </div>

      <!-- Breakdown per Kelas -->
      <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
        <div v-for="(info, kelas) in perKelas" :key="kelas" class="p-3 border border-accented rounded-lg bg-default">
          <div class="text-sm font-medium text-neutral-500 dark:text-neutral-400 mb-1">
            Kelas {{ kelas }}
          </div>
          <div class="text-2xl font-bold">
            {{ info.total }} <span class="text-xs font-normal text-neutral-500">Siswa</span>
          </div>
          <div class="text-xs font-medium flex gap-3 mt-2">
            <span class="text-blue-500">L: {{ info.L }}</span>
            <span class="text-pink-500">P: {{ info.P }}</span>
          </div>
        </div>
      </div>

      <div class="border border-accented rounded-md overflow-hidden">
        <div class="flex px-4 py-3 border-b border-accented">
          <UInput
            v-model="globalFilter"
            icon="i-lucide-search"
            class="max-w-sm w-full"
            placeholder="Cari siswa..."
          />
        </div>

        <UTable
          ref="table"
          v-model:pagination="pagination"
          v-model:global-filter="globalFilter"
          :data="data || []"
          :columns="columns"
          :pagination-options="{
            getPaginationRowModel: getPaginationRowModel(),
          }"
          class="flex-1"
        />

        <div class="flex items-center justify-between border-t border-accented p-4">
          <div class="text-sm text-neutral-500">
            Menampilkan {{ table?.tableApi?.getFilteredRowModel().rows.length || 0 }} data
          </div>
          <UPagination
            :page="(table?.tableApi?.getState().pagination.pageIndex || 0) + 1"
            :items-per-page="table?.tableApi?.getState().pagination.pageSize"
            :total="table?.tableApi?.getFilteredRowModel().rows.length || 0"
            @update:page="(p) => table?.tableApi?.setPageIndex(p - 1)"
          />
        </div>
      </div>
    </div>
  </UContainer>
</template>
