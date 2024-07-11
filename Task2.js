class ApiService {
    async fetchData(url) {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(">>ERROR: Network response was not OK");
        }
        return response.json();
    }
    
    async getData(url) {
        let attempts = 0;
        const maxAttempts = 3;

        while (attempts < maxAttempts) {
            try {
                console.log(`Attempt ${attempts + 1}`);
                return await this.fetchData(url);
            } catch (error) {
                attempts++;
                if (attempts >= maxAttempts) {
                    console.error(">>ERROR: Max attempts exceeded. Failed to fetch data.");
                    throw error;
                }
            }
        }
    }
}

const apiServiceTest = new ApiService();
apiServiceTest.getData("https://google.com")
    .then(data => console.log(data))
    .catch(error => console.error(error));