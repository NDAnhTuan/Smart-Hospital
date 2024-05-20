const path = require('path');

module.exports = {
    mode: 'development',
    entry: {
        index: './src/index.js',
        login: './src/forFEjs/login-account.js',
        listDoctor: './src/forFEjs/list-doctor.js',
        addMEH: './src/forFEjs/addMEH.js',
        viewMyPatient: './src/forFEjs/viewMyPatient.js',
        viewMyPatientMedExamSch: './src/forFEjs/viewMyPatientMedExamSch.js',
        viewMedicine: './src/forFEjs/viewMedicine.js',
        logout: './src/forFEjs/logout-account.js',
        listPatienMEHt: './src/forFEjs/listPatientMEH.js',
        medicine: './src/forFEjs/medicine.js',
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].bundle.js' // Use dynamic filenames for each entry point
      },
    watch: true
}