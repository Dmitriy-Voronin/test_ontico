export async function getData() {
    try {
        const response = await fetch('https://conf.ontico.ru/api/conferences/forCalendar.json', {
            method: 'GET',
            mode: 'cors',
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        });
        const data = await response.json();
        return data;
    } catch (error) {
        console.log(error);
    }
}