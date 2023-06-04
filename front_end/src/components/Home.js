import './Style.css';
import Header from './Header';
import TodoForm from './TodoForm';
import Todos from './Todos';

function Home() {
    return (
        <div className="container">
            <Header />
            <TodoForm />
            <Todos />
        </div>
    );
}



export default Home;
