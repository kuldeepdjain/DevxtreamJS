function fetchData() {
    
    const apiUrl = "https://datausa.io/api/data?drilldowns=Nation&measures=Population"; 


    return new Promise((resolve, reject) => {
       
        $.ajax({
            url: apiUrl,
            method: "GET",
            dataType: "json",
            success: function(data) {
                
                resolve(data.data);
            },
            error: function(xhr, status, error) {
                
                reject(error);
            }
        });
    });
}




