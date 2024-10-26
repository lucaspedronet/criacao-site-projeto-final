import './App.css';
import { useEffect, useState } from 'react';
import {api} from './services/api';

function App() {
  const [repos, setRepos] = useState([]);
  useEffect(() => {
    async function fetch() {
      try {
        const nomeRepo = decodeURIComponent('Jaque-Jaque/aula-armazenamento-Jaqueline');

        const {data} = await api.get(`/repos/${nomeRepo}`);
        

        setRepos(props => [{
          name: data.name,
          description: data.description,
        }]);

        console.log({data});  
      } catch (error) {
        console.log({error})
      }
    }

    fetch();
  }, []);


  return (
    <div className="container"> 
        <h1 className='header-name'>Meus repositórios Favoritos</h1>

        <table class="table">
            <thead>
                <tr>
                <th scope="col">#</th>
                <th scope="col">Respositórios</th>
                <th scope="col">Descrição</th>
                </tr>
            </thead>
            <tbody>
              {repos.map((repo, i) => (
                <tr>
                <th scope="row">{i}</th>
                <td>{repo.name}</td>
                <td>{repo.description}</td>
                </tr>
              ))}
            </tbody>
        </table>
    </div>
  );

}

export default App;
