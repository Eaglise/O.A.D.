import React, {useState, useEffect} from 'react';
//import { Col, Row, Spinner} from "react-bootstrap";
//import LilQuestCard from "../components/LilQuestCard";
// import { getQuests } from '../myRequests'
//import MyBreadcrumb from "../components/BreadCrumbsComp";
//import { useSelector, useDispatch } from 'react-redux';
//import {store, fetchQuestsList} from "../store";
//import ResponsiveAppBar from "../components/TaskPageMenuComp";
import ResponsiveDrawer from "../components/TaskPageMenuComp2";
import TaskBoxComp from "../components/TaskBoxComp";
//import {actionCreator_getQuestsList} from "../store/actionCreators/getQuestsList";

function TasksPage() {


    return (
        <div>
            <ResponsiveDrawer />
            <TaskBoxComp />
        </div>


    );
}

export default TasksPage;