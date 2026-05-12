const mockSAPResponse = [
    { BELNR: "19000001", GJAHR: "2026", DMBTR: "5000.50", HWAER: "INR", BUDAT: "20260512" },
    { BELNR: "19000002", GJAHR: "2026", DMBTR: "1200.00", HWAER: "USD", BUDAT: "20260510" }
];

const fetchSAPData = async () => {
    return mockSAPResponse; // Direct return for testing
};

module.exports = { fetchSAPData };