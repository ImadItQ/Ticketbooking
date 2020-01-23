import React,{Component} from 'react';
import Toolbar from '../../Components/Toolbar/Toolbar';
import Movies from '../../Components/Movies/Movies';
import SubToolbar from '../../Components/SubToolbar/SubToolbar';
import Slides from '../../Components/Slider/Slides';
import Sidebar from '../../Components/Sidebar/Sidebar';
class Bookmyshow extends Component {

    render(){
        return(
            <div>
                <Toolbar />
                <SubToolbar />
                <Slides />
                <Sidebar />
                <Movies />
            </div>
        );
    }
}

export default Bookmyshow;