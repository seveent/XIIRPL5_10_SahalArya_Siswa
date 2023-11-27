const mongoose = require ('mongoose')

const SiswaSchema = new mongoose.Schema({
    nama: {
        type: String,
        required: [true, 'Silahkan isikan nama'],
        unique: false
    },
    absen: {
        type: String,
        required: [true, 'Silahkan isikan nama'],
        unique: true
    },
    kelas: {
        type: String,
        required: [true, 'Silahkan isikan nama'],
        unique: false
    },

    nis: {
        type: String,
        required: [true, 'Silahkan isikan nama'],
        unique: true
    },

    nisn : {
        type: String,
        required: [true, 'Silahkan isikan nama'],
        unique: false
    },
    alamat : {
        type: String,
        required: [true, 'Silahkan isikan nama'],
        unique: false
    }

})

module.exports = mongoose.model('Siswa', SiswaSchema)