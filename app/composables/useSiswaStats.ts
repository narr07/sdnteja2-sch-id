// app/composables/useSiswaStats.ts
interface Siswa {
  id: number
  nama: string
  kelas: number
  jk: string
  usia: number
  nis: number
}

export function useSiswaStats(data: Ref<Siswa[] | null | undefined>) {
  const totalSiswa = computed(() => data.value?.length || 0)

  const totalLakiLaki = computed(() => {
    if (!data.value)
      return 0
    return data.value.filter(s => s.jk === 'L').length
  })

  const totalPerempuan = computed(() => {
    if (!data.value)
      return 0
    return data.value.filter(s => s.jk === 'P').length
  })

  const perKelas = computed<Record<number, { total: number, L: number, P: number }>>(() => {
    if (!data.value)
      return {}

    return data.value.reduce((acc, siswa) => {
      const kelas = siswa.kelas
      if (!acc[kelas]) {
        acc[kelas] = { total: 0, L: 0, P: 0 }
      }
      acc[kelas].total++

      if (siswa.jk === 'L') {
        acc[kelas].L++
      }
      else if (siswa.jk === 'P') {
        acc[kelas].P++
      }

      return acc
    }, {} as Record<number, { total: number, L: number, P: number }>)
  })

  return {
    totalSiswa,
    totalLakiLaki,
    totalPerempuan,
    perKelas,
  }
}
