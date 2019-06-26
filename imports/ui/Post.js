import React, { Component } from 'react'

const dummyBlog = "Veggies es bonus vobis, proinde vos postulo essum magis kohlrabi welsh onion daikon amaranth tatsoi tomatillo melon azuki bean garlic. Gumbo beet greens corn soko endive gumbo gourd. Parsley shallot courgette tatsoi pea sprouts fava bean collard greens dandelion okra wakame tomato. Dandelion cucumber earthnut pea peanut soko zucchini. Turnip greens yarrow ricebean rutabaga endive cauliflower sea lettuce kohlrabi amaranth water spinach avocado daikon napa cabbage asparagus winter purslane kale. Celery potato scallion desert raisin horseradish spinach carrot soko. Lotus root water spinach fennel kombu maize bamboo shoot green bean swiss chard seakale pumpkin onion chickpea gram corn pea. Brussels sprout coriander water chestnut gourd swiss chard wakame kohlrabi beetroot carrot watercress. Corn amaranth salsify bunya nuts nori azuki bean chickweed potato bell pepper artichoke."

export default class Post extends Component {
  render() {
    return (
      <div className='post'>
        <div className='img-container'>
          <img className='card-img' src='https://static1.squarespace.com/static/4f6792f624ac778428aca39d/4f760d4b6a9b61f6cc2748c3/5cc99e47ee6eb0610120949e/1558445945777/2018-12-sqsp-app-blog-hero.png?format=1000w' />
        </div>

        <div className='date'>Post Date</div>
        <div className='title'>Post Title</div>
        <div className='author'>Post Author</div>
        <div className='content'>
          {dummyBlog}
        </div>
      </div>
    )
  }
}