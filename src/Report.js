import React,{Component} from 'react';
import './Report.css';
import Footer from './footer';
import Adheader from './appheader';


class Report extends Component {

render(){ 
return (  <div className="Report" >

  
 <div class="box00">
   
 <Adheader/>

 <br/><br/><br/><br/><br/>
 
 <font size="6" ><b><br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Userที่โดนแบน </b></font>

 <br/><br/>

<table>
  <tr>
    <td width="600" height="150" ><i class="fas fa-user-circle"></i></td>
    <td width="300" height="150" ><font size="5" ><b>User001<br/>มีการใช้ข้อมูลอันเป็นเท็จ</b></font></td>
    <td><button class="buttonband"><b>ปลดแบน</b></button></td>
  </tr>
  </table>


  <hr width="860" align="center" size="19" noshade color="#B3B3B3"></hr>

 
  <table>
  <tr>
    <td width="600" height="150"><i class="fas fa-user-circle" ></i></td>
    <td width="300" height="150"><font size="5" ><b>User001<br/>มีการใช้ข้อมูลอันเป็นเท็จ</b></font></td>
    <td><button class="buttonband"><b>ปลดแบน</b></button></td>
  </tr>
</table>


<hr width="860" align="center" size="6" noshade color="white"></hr>

 
<table>
  <tr>
    <td width="600" height="150" ><i class="fas fa-user-circle" ></i></td>
    <td width="300" height="150"><font size="5" ><b>User001<br/>มีการใช้ข้อมูลอันเป็นเท็จ</b></font></td>
    <td><button class="buttonband"><b>ปลดแบน</b></button></td>
  </tr>
</table>


<hr width="860" align="center" size="6" noshade color="#B3B3B3"></hr>

 
<table>
  <tr>
    <td width="600" height="150" ><i class="fas fa-user-circle" ></i></td>
    <td width="300" height="150"><font size="5" ><b>User001<br/>มีการใช้ข้อมูลอันเป็นเท็จ</b></font></td>
    <td><button class="buttonband"><b>ปลดแบน</b></button></td>
  </tr>
</table>

 
  <hr width="860" align="center" size="6" noshade color="#B3B3B3"></hr>

   
  <table>
  <tr>
    <td width="600" height="150"><i class="fas fa-user-circle" ></i></td>
    <td width="300" height="150"><font size="5" ><b>User001<br/>มีการใช้ข้อมูลอันเป็นเท็จ</b></font></td>
    <td><button class="buttonband"><b>ปลดแบน</b></button></td>
  </tr>
</table>


<hr width="860" align="center" size="6" noshade color="#B3B3B3"></hr>


         <ul>
            <li><a href="#home"><font size="5" ><b>จำนวนคนที่ออนไลน์      + </b></font></a></li>
            <li><a href="#news"><font size="5"><b>โพสที่ถูกลบ      + </b></font></a></li>
            <li><a href="#contact"><font size="5"><b>User ที่โดนแบน       + </b></font></a></li>
           </ul>

    <Footer/>
 </div>

</div>
);
}
}
export default Report;