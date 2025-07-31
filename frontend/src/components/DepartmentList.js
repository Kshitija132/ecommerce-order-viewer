import React,{useEffect,useState} from "react";
import {Link} from "react-router-dom";
function DepartmentList(){
    const [departments,setDepartments]=useState([]);
    useEffect(()=>
    {
        fetch("http://127.0.0.1:5000/departments")
        .then((res)=>res.json())
        .then((data)=>
        setDepartments(data.departments));
    },[]);
    return(
        <div className="sidebar">
            <h3>Department</h3>
            <ul><li>
                <link to="/">All products</link></li>departments.map((dept)=>(<li key={dept.id}>
                    <link to ={`/department/${dept.id}`}>{dept.name}{dept.product_count}</link>
                </li></ul>
        </div>
    )
}

export deafult DepartmentList;