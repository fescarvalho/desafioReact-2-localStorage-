
import React from 'react'
import Produto from './components/Produto'


function App() {
  const [produto, setProduto] = React.useState(null)

//Setando item no local Storage
  React.useEffect(()=> {
    if(produto !== null)
    window.localStorage.setItem('produto', produto)
  }, [produto])

//Buscando item no localStorage
  React.useEffect(()=> {
    const produtoLocal = window.localStorage.getItem('produto')
    if(produtoLocal !== null) setProduto(produtoLocal)
   },[])

//Funcao de clique
  function handleClick(event) {
    setProduto(event.target.innerText)
  }
  return (
   <div>
     <h1>Preferences: {produto}</h1>
     <button style={{marginRight:'10px'}} onClick={handleClick}>notebook</button>
     <button onClick={handleClick}>smartphone</button>
     <Produto produto={produto}/>
   </div>
  );
}

export default App;
