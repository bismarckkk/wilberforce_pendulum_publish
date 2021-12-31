import React, { Component } from 'react';
import Tips from '@/component/tips';
import { connect } from 'umi'
import Exp0 from '@/component/help/exp0';
import Exp1 from '@/component/help/exp1';
import Exp2 from '@/component/help/exp2';
import Exp3 from '@/component/help/exp3';
import Exp4 from '@/component/help/exp4';


@connect(({ user }) => (user))
class Help extends Component {
  render() {
    let Exp=''
    switch (this.props.nowExp.toString()) {
      case "0": Exp = <Exp1/>; break;
      case "1": Exp = <Exp2/>; break;
      case "2": Exp = <Exp3/>; break;
      case "3": Exp = <Exp4/>; break;
      case "4": Exp = <Exp0/>; break;
    }
    return (
      <div style={{marginTop: '25px', backgroundColor: '#fff', padding: 25}}>
        <link href={'//cdnjs.cloudflare.com/ajax/libs/KaTeX/0.13.13/katex.min.css'} rel={'stylesheet'}/>
        {
          this.props.nowExp < 4 ?
            <Tips />
            : <div />
        }
        {Exp}
      </div>
    );
  }
}

export default Help;
