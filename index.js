function gridBindData(data) {

    $('#gridContainer').dxDataGrid({
        dataSource: data,
        keyExpr: "ID Year",
        showBorders: true,
        paging: {
          enabled: false,
        },
        editing: {
          mode: 'row',
          allowUpdating: true,
          allowDeleting: true,
          allowAdding: true,
        },
        columns: [
          {
            dataField: 'ID Nation',
            
          },
          {
            dataField: 'Population',
           
          }, 
          {
              dataField: 'Year',
       
            }, 
            {
              dataField: 'Nation',
       
            }, 
        ],
        onEditingStart() {
            
          logEvent('EditingStart');
        },
        onInitNewRow() {
          logEvent('InitNewRow');
        },
        onRowInserting() {
          logEvent('RowInserting');
        },
        onRowInserted() {
          logEvent('RowInserted');
        },
        onRowUpdating() {
          logEvent('RowUpdating');
        },
        onRowUpdated() {
          logEvent('RowUpdated');
        },
        onRowRemoving() {
          logEvent('RowRemoving');
        },
        onRowRemoved() {
          logEvent('RowRemoved');
        },
        onSaving() {
          logEvent('Saving');
        },
        onSaved() {
          logEvent('Saved');
        },
        onEditCanceling() {
          logEvent('EditCanceling');
        },
        onEditCanceled() {
          logEvent('EditCanceled');
        },
      });
    
      $('#clear').dxButton({
        text: 'Clear',
        onClick() {
          $('#events ul').empty();
        },
      });

}
$(() => {


    function logEvent(eventName) {
      const logList = $('#events ul');
      const newItem = $('<li>', { text: eventName });
  
      logList.prepend(newItem);
    }
    //alert("1")
        // Usage:
    fetchData()
        .then(function(data) {
        // Handle the API response data here
    const employees =data;
   // alert(JSON.stringify(employees));
   // gridBindData(employees);

   $('#gridContainer').dxDataGrid({
    dataSource: employees,
    keyExpr: "ID Year",
    showBorders: true,
    paging: {
      enabled: false,
    },
    editing: {
      mode: 'row',
      allowUpdating: true,
      allowDeleting: true,
      allowAdding: true,
    },
    columns: [
      {
        dataField: 'ID Nation',
        
      },
      {
        dataField: 'Population',
       
      }, 
      {
          dataField: 'Year',
   
        }, 
        {
          dataField: 'Nation',
   
        }, 
    ],
    onEditingStart() {
        
      logEvent('EditingStart');
    },
    onInitNewRow() {
      logEvent('InitNewRow');
    },
    onRowInserting() {
      logEvent('RowInserting');
    },
    onRowInserted() {
      logEvent('RowInserted');
    },
    onRowUpdating() {
      logEvent('RowUpdating');
    },
    onRowUpdated() {
      logEvent('RowUpdated');
    },
    onRowRemoving() {
      logEvent('RowRemoving');
    },
    onRowRemoved() {
      logEvent('RowRemoved');
    },
    onSaving() {
      logEvent('Saving');
    },
    onSaved() {
      logEvent('Saved');
    },
    onEditCanceling() {
      logEvent('EditCanceling');
    },
    onEditCanceled() {
      logEvent('EditCanceled');
    },
  });

  $('#clear').dxButton({
    text: 'Clear',
    onClick() {
      $('#events ul').empty();
    },
  });
    
})
.catch(function(error) {
    // Handle errors here
    console.error("API Request Error:", error);
});

//alert("function")
    
  });
  