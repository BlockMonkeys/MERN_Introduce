import React from 'react'
import { Card } from 'antd';
import { GithubOutlined, HomeOutlined } from '@ant-design/icons'

const { Meta } = Card;
function CardComponent(props) {
  return (
    <div>
      <a>
        <Card
          hoverable
          style={{ width: 250 }}
          cover={<img alt="example" src={props.cardImg} style={{ width: 250, height: 110 }}onClick={props.goHomeFunc}/>}
          actions={[
            <HomeOutlined onClick={props.goHomeFunc}/>,
            <GithubOutlined onClick={()=> window.open(props.githubLink, "_blank")}/>
            
          ]}
        >
          <Meta title={props.title} description={props.description} />
        </Card>
      </a>
    </div>
  )
}

export default CardComponent;
