// function Test(){
//     alert("Connect success!")
// }

const LAYANAN = ['SKA', 'CAK','TNM', 'PDA']

function formatTanggal(dateStr) {
    const bulan = ['Jan', 'Feb', 'Mar', 'Apr', 'Mei', 'Jun', ]
}
function validasiForm() {
    const namalengkap = document.getElementById(namalengkap).value.trim();
    const nim = document.getElementById(nim).value.trim();
    const prodi = document.getElementById(prodi).value.trim();
    const layanan = document.getElementById(layanan).value;
    const tanggal = document.getElementById(tanggal).value;
    const keterangan = document.getElementById(keterangan).value.trim();

    if (namalengkap === '' ||  nim === '' || prodi === '' || layanan === '' || tanggal === '') {
        alert('❌ Semua field harus diisi, yaaa!');
        return false;
    }
}
// function formatTanggal(dateStr) {
//     const bulan = ['Jan', 'Feb', 'Mar', 'Apr', 'Mei', 'Jun', 'Jul', 'Agu', 'Sep', 'Okt', 'Nov', 'Des']
//     const d = new Date(dateStr);
//     return d.getDate()
// }
