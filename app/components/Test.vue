<template>
  <UContainer class="py-12 space-y-12">
    <!-- Header -->
    <div class="text-center">
      <h1 class="text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-6xl mb-4">
        Sistem Desain UI
      </h1>
      <p class="text-lg leading-8 text-gray-600 dark:text-gray-400">
        Halaman uji coba komponen Nuxt UI (Warna, Tipografi, Buttons, Forms, dll).
      </p>
    </div>
    <!-- Buttons -->
    <UCard>
      <template #header>
        <h2 class="text-xl font-semibold">
          1. Buttons
        </h2>
      </template>
      <div class="flex flex-wrap gap-4 items-center">
        <UButton color="primary" variant="solid">
          Primary Solid
        </UButton>
        <UButton color="primary" variant="soft">
          Primary Soft
        </UButton>
        <UButton color="primary" variant="outline">
          Primary Outline
        </UButton>
        <UButton color="primary" variant="ghost">
          Primary Ghost
        </UButton>
        <UButton color="neutral" variant="solid">
          Neutral Solid
        </UButton>
        <UButton color="neutral" variant="soft">
          Neutral Soft
        </UButton>
        <UButton icon="i-heroicons-paper-airplane" color="primary">
          With Icon
        </UButton>
        <UButton loading color="primary">
          Loading
        </UButton>
      </div>
    </UCard>
    <!-- Forms -->
    <UCard>
      <template #header>
        <h2 class="text-xl font-semibold">
          2. Inputs & Forms
        </h2>
      </template>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label class="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-1">Text Input</label>
          <UInput placeholder="Ketik sesuatu di sini..." />
        </div>
        <div>
          <label class="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-1">Input Icon</label>
          <UInput icon="i-heroicons-magnifying-glass" placeholder="Cari..." />
        </div>
        <div>
          <label class="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-1">Select</label>
          <USelect :options="['Opsi 1', 'Opsi 2', 'Opsi 3']" placeholder="Pilih..." />
        </div>
        <div>
          <label class="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-1">Textarea</label>
          <UTextarea placeholder="Pesan Anda..." :rows="3" />
        </div>
        <div class="flex items-center gap-4">
          <UCheckbox label="Setuju dengan syarat" />
        </div>
        <div class="flex items-center gap-4">
          <UToggle on-icon="i-heroicons-check-20-solid" off-icon="i-heroicons-x-mark-20-solid" />
          <span class="text-sm">Aktifkan pengaturan</span>
        </div>
      </div>
    </UCard>
    <!-- Alerts -->
    <UCard class="ring-2 hover:ring-primary-400 hover:dark:ring-primary-900">
      <template #header>
        <h2 class="text-xl font-semibold">
          3. Alerts
        </h2>
      </template>
      <div class="space-y-4">
        <UAlert
          icon="i-heroicons-command-line"
          title="Berhasil"
          description="Sistem komponen termuat dengan sukses."
          color="primary"
          variant="soft"
        />
        <UAlert
          icon="i-heroicons-exclamation-triangle"
          title="Peringatan"
          description="Ini adalah contoh desain peringatan."
          color="warning"
          variant="soft"
        />
      </div>
    </UCard>
    <!-- Tipografi / Prose HTML -->
    <UCard>
      <template #header>
        <h2 class="text-xl font-semibold">
          4. Tipografi (HTML / Content)
        </h2>
      </template>
      <div class="prose dark:prose-invert max-w-none">
        <h1 class="font-black text-4xl text-primary-700 dark:text-primary-400 font-heading">
          Heading 1 - Judul Utama Artikel
        </h1>
        <h2 class="font-bold text-4xl text-gray-700 dark:text-gray-300 font-heading">
          Heading 2 - Sub Judul Level 1
        </h2>
        <h3>Heading 3 - Sub Judul Level 2</h3>
        <h4>Heading 4 - Sub Judul Level 3</h4>
        <h5>Heading 5 - Poin Kecil</h5>
        <h6>Heading 6 - Poin Terkecil</h6>
        <p>
          Ini adalah contoh paragraf teks panjang. Paragraf ini mendemonstrasikan bagaimana teks biasa dirender di halaman web. Anda bisa menggunakan <strong>teks cetak tebal (bold)</strong> untuk memberikan penekanan penting, atau <em>teks cetak miring (italic)</em> untuk pemakaian istilah asing, sampai ke pemakaian coretan bergaya seperti <del>strikethrough</del>.
        </p>
        <p>
          Paragraf ini memisahkan ide baru. Kami juga mencontohkan bagian menyoroti <mark>teks seperti marker</mark>, penempatan dari <code>inline code (kode sejajar)</code>, dan memasukan <a href="#">sebuah tautan hiperteks (link)</a> ke halaman sekolah.
        </p>
        <blockquote>
          <p>"Ini adalah kutipan langsung (blockquote). Biasa digunakan untuk menampilkan ucapan Kepala Sekolah, visi misi yang kuat, atau kutipan tokoh pendidikan."</p>
        </blockquote>
        <h4>Contoh Format List</h4>
        <p><strong>Unordered List (Tidak Berurutan):</strong></p>
        <ul>
          <li>Kegiatan Ekstrakurikuler Wajib</li>
          <li>
            Fasilitas Penunjang Pendidikan
            <ul>
              <li>Laboratorium Komputer</li>
              <li>Perpustakaan Digital Terpadu</li>
            </ul>
          </li>
          <li>Prestasi Akademik Sekolah</li>
        </ul>
        <p><strong>Ordered List (Berurutan):</strong></p>
        <ol>
          <li>
            Proses Penerimaan Siswa Baru
            <ol>
              <li>Pendaftaran Dokumen Online</li>
              <li>Wawancara Orang Tua dan Siswa</li>
            </ol>
          </li>
          <li>Tes Potensi Skolastik</li>
          <li>Pengumuman Hasil Kelulusan Seleksi</li>
        </ol>
        <hr>
        <p><em>Di atas ini ada separator menggunakan tag <code>&lt;hr&gt;</code> untuk membedakan blok antar konten tulisan.</em></p>
      </div>
    </UCard>
  </UContainer>
</template>
