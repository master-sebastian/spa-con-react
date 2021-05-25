export default async function ClientHttpPersonal(baseUrl, endPoint, options={}, callback=()=>{}){
    if(options.headers === undefined){
        options.headers = {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        }
    }
    const response = await fetch(baseUrl+endPoint, options)
    const data = await response.json()
    callback()
    return data
}