import React,  {Fragment} from 'react'
 
import "./styles/Index.css"
import ContainerRoot from "./../components/ContainerRoot"

class Index extends React.Component {

    state = {
        loading: true,
        error: null,
        data:{
            results: []
        },
    }
    unmount = false
    nextPage = 1
    componentDidMount(){
        this.setState({
            loading: true,
            error: null,
        })
        this.unmount = false
        this.fetchData(this)
    }

    componentWillUnmount(){
        this.unmount = true
    }
    fetchData = async (it) => {
        this.setState({
            loading: true,
            error: null,
        })
        try{
            const response = await fetch("https://rickandmortyapi.com/api/character/?page="+it.nextPage)
            const data = await response.json()
            if(response.status === 200){
                if(!it.unmount){
                    it.setState({
                        data: {
                            results: [].concat(
                                this.state.data.results,
                                data.results
                            )
                        },
                        loading: false
                    })
                    it.nextPage++
                }else{
                    throw Error("componente a sido desmontado")
                }
            }else{
                throw Error("Servidor no response")
            }
        }catch(error){
            console.log(error)
            if(!it.unmount){
                it.setState({
                    loading:false,
                    error:error
                })
            }
        }
    }
    
    render(){
        let notFound = <></>;
        if(this.state.data.results.length === 0){
            notFound = <h3>No hay datos en la api</h3>
        }
        return (
            <Fragment>
                <ContainerRoot>
                    <div>
                        <h1>Api de rick and morty</h1>
                    </div>
                    {this.props.match.params.messageProps && (
                        <>
                            <hr></hr>
                            <h2>{this.props.match.params.messageProps}</h2>
                        </>
                    )}
                    <hr></hr>
                    {notFound}
                    <ul>
                        {
                            this.state.data.results.map(
                                data => (
                                    <li key={data.id}>{ data.name }</li>
                                )
                            )
                        }
                    </ul>

                    <hr></hr>
                    {this.state.error && (<h1>{this.state.error.message}</h1>)}
                    {this.state.loading && (<h1>Cargando....</h1>)}
                    <button type="button" onClick={()=>this.fetchData(this)}>Ver mas</button>
                </ContainerRoot>
            </Fragment>
        );
    }
}

export default Index;