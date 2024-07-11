function performOperations() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Fetching data...');
            resolve({ data: 'fetchedData' });
        }, 1000);
    })
        .then(fetchedData => {
            return new Promise((resolve, reject) => {
                console.log('Processing data...');
                setTimeout(() => {
                    resolve({ processedData: fetchedData.data + '_processed' });
                }, 1000);
            });
        })
        .then(processedData => {
            return new Promise((resolve, reject) => {
                console.log('Saving data...');
                setTimeout(() => {
                    resolve({ savedData: processedData.processedData + '_saved' });
                }, 1000);
            });
        })
        .then(savedData => {
            console.log('Success:', savedData.savedData);
        })
        .catch(error => {
            console.error('Error:', error);
        });
}

performOperations();
