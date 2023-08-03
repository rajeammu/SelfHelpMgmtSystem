import React from "react";
import {  Link, Outlet } from 'react-router-dom';
import './Member.css';
function Member()
{
return(

<div class="user">
<div class="head">
<Link id="head" to="/dashboard/member/memberlist">Member</Link>
<div id="Linked">
<Link id="linked6" to="/dashboard/member/memberform" >+ Add New Member</Link>
</div>
<Outlet />
</div>
</div>


);
}
export default Member;