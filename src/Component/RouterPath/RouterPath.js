import React from "react";
import {Switch,Route } from "react-router-dom";
import Home from '../FrontPage/Home/Home';
import Technology from "../Technology/Technology/Technology";
import Bollywood from '../Bollywood/Bollywood';
import Hollywood from "../Hollywood/Hollywood";
import Fitness from "../Fitness/Fitness";
import Food from "../Food/Food";
import BollywoodLink from "../Bollywood/Bollywood/BollywoodLink";
import HollywoodLink from "../Hollywood/Hollywood/HollywoodLink";
import FitnessLink from "../Fitness/Fitness/FitnessLink";
import FoodLink from "../Food/Food/FoodLink";
import TechnologyArticle from '../Technology/TechnologyArticle';
import Login from '../Login/Login';
import HomeLink from "../FrontPage/Home/HomeLink";
import LatestLink from '../FrontPage/LatestStories/LatestLink';
import CategoryLink from "../Category/CategoryLink";
import Pic1 from "../FrontPage/Home/pic1";
import LastArticleLink from "../FrontPage/LastArticle/LastArticleLink";

export default function RouterPath(){
    return(
        
        <div>
        <Switch>
            <Route path='/' component={Home} exact></Route>
            <Route path='/Bollywood' component={Bollywood} exact></Route>
            <Route path='/Technology' component={Technology} exact></Route>
            <Route path='/Hollywood' component={Hollywood} exact></Route>
            <Route path='/Fitness' component={Fitness} exact></Route>
            <Route path='/Food' component={Food} exact></Route>
            <Route path='/Bollywood/:id' component={BollywoodLink} exact></Route>
            <Route path='/Hollywood/:id' component={HollywoodLink} exact></Route>
            <Route path='/Fitness/:id' component={FitnessLink} exact></Route>
            <Route path='/Food/:id' component={FoodLink} exact></Route>
            <Route path='/Technology/:id' component={TechnologyArticle} exact></Route>
            <Route path='/login' component={Login} exact></Route>
            <Route path='/Home/:id' component={HomeLink}></Route>
            <Route path='/Home/pic1' component={Pic1}></Route>
            <Route path='/Latest/LatestLink' component={LatestLink}exact></Route>
            <Route path='/Category/:id' component={CategoryLink}exact></Route>
            <Route path='/LastArticle/1' component={LastArticleLink}></Route>
        </Switch>
        </div>
    );
}