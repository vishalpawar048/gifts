import React, { Component } from "react";
import himData from "./data/forHimData";
import herData from "./data/forHerData";
import Client from "./Contentful";

const RoomContext = React.createContext();

export default class RoomProvider extends Component {
  state = {
    himGifts: [],
    herGifts: [],
    sortedRooms: [],
    featuredRooms: [],

    loading: true,
    //
    type: "all",
    capacity: 1,
    price: 0,
    minPrice: 0,
    maxPrice: 0,
    minSize: 0,
    maxSize: 0,
    breakfast: false,
    pets: false
  };

  componentDidMount() {
    let himGifts = this.formatData(himData);
    let herGifts = this.formatData(herData);
    this.setState({
      himGifts,
      loading: false,
      herGifts
    });
  }

  formatData(items) {
    let tempItems = items.map(item => {
      let id = item.sys.id;
      let images = item.fields.images.map(image => image.fields.file.url);

      let gift = { ...item.fields, images, id };
      return gift;
    });
    return tempItems;
  }

  getRoom = (slug, type) => {
    let tempGifts;
    console.log(">>>>>>tempGiftstempGifts", type, "/forHer/:slug");
    if (type === "/ForHer/:slug") {
      tempGifts = [...this.state.herGifts];
    } else {
      tempGifts = [...this.state.himGifts];
    }
    const gift = tempGifts.find(gift => gift.slug === slug);
    return gift;
  };
  handleChange = event => {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    // const name = target.name;
    // console.log(name, value);

    this.setState(
      // {
      //   [name]: value
      // },
      this.filterRooms
    );
  };
  filterRooms = () => {
    let {
      rooms,
      type,
      capacity,
      price,
      minSize,
      maxSize,
      breakfast,
      pets
    } = this.state;

    let tempRooms = [...rooms];
    // transform values
    // get capacity
    capacity = parseInt(capacity);
    price = parseInt(price);
    // filter by type
    if (type !== "all") {
      tempRooms = tempRooms.filter(room => room.type === type);
    }
    // filter by capacity
    if (capacity !== 1) {
      tempRooms = tempRooms.filter(room => room.capacity >= capacity);
    }
    // filter by price
    tempRooms = tempRooms.filter(room => room.price <= price);
    //filter by size
    tempRooms = tempRooms.filter(
      room => room.size >= minSize && room.size <= maxSize
    );
    //filter by breakfast
    if (breakfast) {
      tempRooms = tempRooms.filter(room => room.breakfast === true);
    }
    //filter by pets
    if (pets) {
      tempRooms = tempRooms.filter(room => room.pets === true);
    }
    this.setState({
      sortedRooms: tempRooms
    });
  };
  render() {
    return (
      <RoomContext.Provider
        value={{
          ...this.state,
          getRoom: this.getRoom,
          handleChange: this.handleChange
        }}
      >
        {this.props.children}
      </RoomContext.Provider>
    );
  }
}
const RoomConsumer = RoomContext.Consumer;

export { RoomProvider, RoomConsumer, RoomContext };

export function withRoomConsumer(Component) {
  return function ConsumerWrapper(props) {
    return (
      <RoomConsumer>
        {value => <Component {...props} context={value} />}
      </RoomConsumer>
    );
  };
}
