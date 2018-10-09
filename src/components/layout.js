import React from 'react'
import styled from 'styled-components'
import Header from './Header'
import Content from './Content'
import Helmet from 'react-helmet'

import '../css/base.css'

const Root = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`

export default class Layout extends React.Component {
  render() {
    const { children, location } = this.props
    const isPost =
      location.pathname !== '/' && !location.pathname.match(/^\/videos\/?$/)

    return (
      <Root>
        <Helmet
          title="好多视频网"
          meta={[
            {
              name: 'description',
              content: 'Web 开发视频播客'
            },
            {
              name: 'keywords',
              content:
                'web, css, javascript, react, node, blockchain 设计, 编辑器, 开发工具'
            }
          ]}
        />
        <Header isPost={isPost} />
        <Content isPost={isPost}>{children}</Content>
      </Root>
    )
  }
}
