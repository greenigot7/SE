import React from 'react';
import './App.css';

function App() {
  return (
    
    <div className="Appg">
            
      <div class="main">

      <br/> <br/> <br/><br/> <br/> 

      
        <div class="holder_wrap">
        <div class="holder_wrap_img">
        <img src={require('./cat.png')} ALIGN =  "LEFT" alt="bg"  hspace="250" style={{width: 401, height: 604}} />
        <div class="inner_position_right">

        <br/><font size="6.5" ><b>สมัครสมาชิก</b></font><br/>
     
        <br/><label for="account"><font size="5" ><b>ชื่อบัญชี</b></font></label>
        <input type="usertext" id="account" name="account"></input>     
        
        <br/> <br/> <br/> <br/><label for="password"><font size="5" ><b>รหัสผ่าน</b></font></label>
        <input type="password" id="password" name="password" ></input>
       
        <br/> <br/> <br/> <br/><label for="checkpassword"><font size="5" ><b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;ยืนยันรหัสผ่าน </b></font></label>
        <input type="password" id="checkpassword" name="checkpassword" ></input>

        <br/><br/><br/>

        <tr>
      <td width="330" align="left" ><label for="name"><font size="5" ><b>&nbsp; &nbsp;ชื่อ   </b></font></label>
      
      <input type="text1" id="name" name="name"></input></td>

      <td width="330"align="left" ><label for="lastname"><font size="5" ><b> นามสกุล   </b></font></label>
      <input type="text1" id="lastname" name="lastname"></input></td>
    </tr>

    <tr>
      <td width="330" align="left"> <br/><label for="email"><font size="5" ><b> &nbsp; &nbsp;อีเมล </b></font></label>
      
      <input type="text1" id="email" name="email" ></input>
       </td>

      <td width="330"align="left" ><br/><label for="tel"><font size="5" ><b>เบอร์โทร  </b></font></label> 
      <input type="text1" id="tel" name="tel" ></input>
      </td>
    </tr>





        <br/>
        <button class="buttong"><b>สมัครสมาชิก</b></button>

        <br/> <br/>
        <p1><b><font color="#FFCFD7"><font size="3" >เป็นสมาชิกแล้วใช่ไหม&nbsp;</font></font></b><a href ="#"><b><font size="3" >เข้าสู่ระบบ</font></b></a></p1>

        <br/><br/>

        
        <a href ="#"><img src={require('./facebook.png')} alt="fb" hspace="15" style={{width: 50, height: 50}} /></a>
        <a href ="#"><img src={require('./google.png')} alt="gg" hspace="15" style={{width: 50, height: 50}} /></a>
        <a href ="#"><img src={require('./twitter.png')} alt="tw" hspace="15" style={{width: 50, height: 50}} /></a>

        </div>
        </div>
        </div>
 
       </div>

    
      



    </div>







  );
}


 export default App;