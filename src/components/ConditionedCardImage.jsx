import { Component } from "react";
import { Card } from "react-bootstrap";

class ConditionedCardImage extends Component {
  state = {
    src: "https://images.unsplash.com/photo-1622278647429-71bc97e904e8?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  }

  ChangeImage = () => {
    switch (this.props.code) {
        case "04d":
            this.setState({
                src:
                    "https://images.unsplash.com/photo-1603437873662-dc1f44901825?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            });
            break;
        case "10n":
            this.setState({
                src:
                    "https://plus.unsplash.com/premium_photo-1661715304145-e686bb947289?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            });
            break;
        default:
            this.setState({
                src:
                "https://images.unsplash.com/photo-1622278647429-71bc97e904e8?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            })
    }
  }

  componentDidUpdate(prevProps) {
    if (this.props.code !== prevProps.code) {
      this.ChangeImage()
    }
  }

  render() {
    return <Card.Img variant="top" src={this.state.src} />
  }
}

export default ConditionedCardImage