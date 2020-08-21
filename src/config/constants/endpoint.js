export default {
  "stockListService": {
    "identifier": "stockListService",
    "endpoint": "stocks",
    "errorMsg": "fetching stocks list failed",
    "loadMsg": "Fetching list of all the stocks"
  },
  "bullStockService": {
    "identifier" : "bullStockService",
    "endpoint": "stocks/bull",
    "errorMsg": "fetching bull stocks list failed",
    "loadMsg": "Fetching list of recommended stocks"
  },
  "marketTrendsService": {
    "identifier" : "marketTrendsService",
    "endpoint": "stocks/trend",
    "errorMsg": "fetching market trend failed",
    "loadMsg": "Fetching market trends"
  },
  "stockDetailService": {
    "identifier" : "stockDetailService",
    "endpoint": "stocks/details/",
    "errorMsg": "Fetching stock detailed info failed",
    "loadMsg": "fetching detailed information about a stock"
  },
};
