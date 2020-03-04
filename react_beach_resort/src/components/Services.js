import React, { Component } from 'react'
import Title from './Title'
import {FaCocktail, FaHiking, FaShuttleVan, FaBeer} from "react-icons/fa"

export default class Services extends Component {
    state={
        services:[
            {
                icon:<FaCocktail></FaCocktail>,
                title:"free coctails",
                info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            },

            {
                icon:<FaHiking></FaHiking>,
                title:"Hiking",
                info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            },

            {
                icon:<FaShuttleVan></FaShuttleVan>,
                title:"free Shuttle service",
                info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            },

            {
                icon:<FaBeer></FaBeer>,
                title:"Strongest Beer",
                info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            }
        ]
    }
    render() {
        return (
            <section className="services">
                
                <Title title="Services"></Title>
                <div className="services-center">
                    {this.state.services.map((item,index)=>{
                        return <article key={index} className="service">
                            <span>{item.icon}</span>
                            <h6>{item.title}</h6>
                            <p>{item.info}</p>
                            </article>
                    })}

                </div>
            </section>
        )
    }
}
