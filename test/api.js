async function fetchData(){
    try {
        const response = await
        fetch('http://localhost:3001/users')
        if(!response){
            throw new Error('Failed to Fetch')
        }
        const data = response.json();
        return data;
    } catch (error) {
        throw error;
    }
}