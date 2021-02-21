import React from 'react';
import { Spring } from 'react-spring';

export default function component1() {
  return (
    <Spring
      from={{ opacity: 0 }}
      to={{ opacity: 1 }}
    >
      {props => (
        <div style={props}>
          <div style={c1Style}>
            <h1>component 1</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis cum
            iusto distinctio, tempore voluptatum obcaecati. Autem, sint! Modi, fugiat
                reiciendis? Voluptatibus unde adipisci at aut doloribus, reiciendis nisi aliquid atque!</p>
          </div>
        </div>
      )}
    </Spring>
  )
}