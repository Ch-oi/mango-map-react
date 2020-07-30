import React from 'react'
import { ThemeContext } from '../../../Contexts/Theme'
import {
  Card, CardImg, CardBody, CardTitle, CardSubtitle, Button
} from 'reactstrap';



const FavPostSummary = (props) => {
  console.log(props)
  return (

    <ThemeContext.Consumer>{(context) => {
      const { isLightTheme, light, dark } = context;
      const theme = isLightTheme ? light : dark;

      return (
        <div>
        <Card className="margin5" style={{ background: theme.low, borderColor: theme.high }}>
        <CardImg top width="100%" src='' alt="post_img" />
        <CardBody>
            <CardTitle className="bold">{props.favPosts.title.toUpperCase()}</CardTitle>
            <CardSubtitle >{props.favPosts.created_at.slice(0, 10)}</CardSubtitle>
            <br />
            <a href="/blog/:id" className="d-flex justify-content-center"><Button className="noBorder" style={{ background: theme.highlight }}>View more</Button></a>
        </CardBody>
    </Card>

        </div>)
    }}
    </ThemeContext.Consumer>
  )
}

export default FavPostSummary