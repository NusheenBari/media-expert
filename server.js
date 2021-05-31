const express = require('express')
const app = express()
app.use('/public', express.static('public'));

const articleRouter = require('./routes/articles')
//setting up view engine
app.set('view engine', 'ejs')


app.use('/articles', articleRouter)

app.get('/', (req, res) =>{
    //res.send('Hello World')
    const articles = [{
        title:'Hello World',
        createdAt: new Date(),
        description: 'Text excerpt...'
    },{
        title:'New Blog Article',
        createdAt: new Date(),
        description: 'Text excerpt from "New Blog Article"'
    }]
    res.render('blog', {articles: articles})
})

app.listen(5000)