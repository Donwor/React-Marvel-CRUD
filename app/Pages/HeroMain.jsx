var React = require('react');
var {Link, IndexLink} = require('react-router');
const json = require('json-loader!../api/heroes.json');
var HeroDetail = require('HeroDetail');
var ListHeroes = require('ListHeroes');
var Nav = require('Nav');

var HeroMain = React.createClass({
    getInitialState: function(){
        return {
            clicked: false,
        }
    },

    onHeroClick(id){
        var that = this;
        that.setState({
            clicked: true,
            id: id
        });
    },


    render: function(){
        var {id,clicked} = this.state;
        var heroes = json.heroes;
        
        function renderHero(){
            if(clicked){

                return (
                    <div>                    
                        <HeroDetail id={heroes[id].id} name={heroes[id].name} desc={heroes[id].description} img={heroes[id].img.path}/>
                    </div>
                )
            }   
        }

        return (            
           <div className="small-12 columns">
               <ListHeroes onClick={this.onHeroClick}/>
               {renderHero()}
           </div>
          )
    }

});



module.exports = HeroMain;