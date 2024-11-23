import Cancelledlogo from "../assets/icons_FEtask/Cancelled.svg";
import add from "../assets/icons_FEtask/add.svg"
import dots from "../assets/icons_FEtask/dots.svg"

const Cancelled = () => {


    return (
        <div>
            <div className="todo">
                <img src={Cancelledlogo} alt="icon" height={20} width={20}/>
                <h1>Cancelled <span className="num">0</span></h1>
                <div className="todo_icons">
                    <img src={add} alt="icon" height={20} width={20}/>
                    <img src={dots} alt="icon" height={20} width={20}/>
                </div>
            </div>
        </div>
    );
};


export default Cancelled
