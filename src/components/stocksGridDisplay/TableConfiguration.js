const formatter = (p) => { return parseFloat(Number.parseFloat(p.value).toFixed(2))};


export default  {
  rowModelType: "infinite",
  maxBlocksInCache: 3,
  headerHeight: 55,
  cacheBlockSize: 1001,
  columnDefs: [
    {headerName: "c", field: "", width:2, cellClassRules:  {
        'baap-stock': function(params) {
          return params.data.flag === 5;
        },
        "above-ema": function(params) {
          return params.data.flag === 4 ;
        },
        "below-ema": function(params) {
          return params.data.flag === 3 ;
        },
        "etf": function(params) {
          return params.data.flag === 1 ;
        },
        "others": function(params) {
          return [0,2].includes(params.data.flag) ;
        },
      }
    },
    {headerName: "Name", field: "symbol"},
    {headerName: "Delivery", field: "delivery", valueFormatter: formatter},
    {headerName: "Volume", field: "volume"},
    {headerName: "EMA Today", field: "emaToday",  valueFormatter: formatter },
    {headerName: "EMA Yesterday", field: "emaYesterday", valueFormatter: formatter},
    {headerName: "Price", field: "price"},
    {headerName: "Last Update", field: "updateDate"},
  ],
  context: {
  },
  overlayNoRowsTemplate:
    "<span style=\"padding: 10px; border: 1px solid #444; \">No Stocks available for current selection</span>"
};
