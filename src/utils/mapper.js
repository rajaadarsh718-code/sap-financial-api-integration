// src/utils/mapper.js
const mapSAPToFinancialData = (sapRawData) => {
    return sapRawData.map(item => ({
        invoiceId: item.BELNR,
        amount: parseFloat(item.DMBTR),
        currency: item.HWAER,
        date: item.BUDAT
    }));
};

module.exports = { mapSAPToFinancialData };