import React from 'react';
import {StyleSheet, Text, View, Image, ScrollView} from 'react-native';

const DetailScreen = () => {
  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.HeaderText}>Video Details</Text>
        <Text style={styles.TitleText}>
          1.Top 10 Most Expensive Cars in 2020
        </Text>
        <Text style={styles.bodyText}>
          This Video includes top 10 most expensive cars in 2020. Also It
          includes estimated price, top speed ,limited units for every cars
        </Text>
        <Image
          source={require('../Images/cars.png')}
          style={styles.ImageHome}
        />

        <Text style={styles.TitleText}>
          2.Node.js+MongoDB+HTML Sample Project
        </Text>
        <Text style={styles.bodyText}>
          This video includes sample projects about Node.js, HTML and MongoDB
          Techniques. Also, I include a Medium article about that project.
        </Text>
        <Image
          source={require('../Images/node.png')}
          style={styles.ImageHome}
        />

        <Text style={styles.TitleText}>
          3.Live Cricket Status Web Application - ReactJS
        </Text>
        <Text style={styles.bodyText}>
          This project includes a web application about cricket status. this
          project based on ReactJS technology. Also, I include a Medium article
          about that project.
        </Text>
        <Image
          source={require('../Images/crickapp.png')}
          style={styles.ImageHome}
        />

        <Text style={styles.TitleText}>4.Hibernate-Setting up environment</Text>
        <Text style={styles.bodyText}>
          This video includes how to setting up an environment for a hibernate
          project.
        </Text>
        <Image
          source={require('../Images/hibernate1.png')}
          style={styles.ImageHome}
        />

        <Text style={styles.TitleText}>
          5.Hibernate Configuration with Annotations
        </Text>
        <Text style={styles.bodyText}>
          This video includes hibernating configurations with annotations
          project.
        </Text>
        <Image
          source={require('../Images/hibernate2.png')}
          style={styles.ImageHome}
        />

        <Text style={styles.TitleText}>
          6.Who will you marry in the future ?
        </Text>
        <Text style={styles.bodyText}>
          This video is a personal test. It include 10 questions. One question
          has four answers. You can choose one answer if you like . Also four
          answers have different points. Finally count your full marks and you
          can check what category you include.
        </Text>
        <Image
          source={require('../Images/marry.png')}
          style={styles.ImageHome}
        />

        <Text style={styles.TitleText}>
          7.Best Cover Drives in Cricket History.
        </Text>
        <Text style={styles.bodyText}>
          This Video includes 10 Best cover drivesin cricket history.
        </Text>
        <Image
          source={require('../Images/cricket.png')}
          style={styles.ImageHome}
        />

        <Text style={styles.TitleText}>8.Top 10 Healthy Chicken Recipes</Text>
        <Text style={styles.bodyText}>
          This video includes the top 10 healthy chicken recipes in the world.
          Then enjoy my video. my last video about the top 10 restaurants in the
          world
        </Text>
        <Image
          source={require('../Images/chicken_recipe.png')}
          style={styles.ImageHome}
        />

        <Text style={styles.TitleText}>9.Top Delicious Food Restaurants</Text>
        <Text style={styles.bodyText}>
          This video includes top delicious soul restaurants in the world
        </Text>
        <Image
          source={require('../Images/food1.png')}
          style={styles.ImageHome}
        />

        <Text style={styles.TitleText}>10.Beautiful places in the world</Text>
        <Text style={styles.bodyText}>
          This video includes beautiful places in the world
        </Text>
        <Image
          source={require('../Images/places.png')}
          style={styles.ImageHome}
        />
      </View>
    </ScrollView>
  );
};

export default DetailScreen;

const styles = StyleSheet.create({
  HeaderText: {
    color: 'black',
    fontSize: 25,
    marginTop: 10,
    fontWeight: 'bold',
    marginLeft: 15,
  },
  bodyText: {
    fontSize: 21,
    marginTop: 5,
    marginLeft: 15,
    alignItems: 'baseline',
  },
  TitleText: {
    color: 'black',
    fontSize: 23,
    marginTop: 10,
    fontWeight: 'bold',
    marginLeft: 10,
  },
  ImageHome: {
    width: 400,
    height: 220,
    marginLeft: 5,
    marginRight: 5,
    marginTop: 20,
  },
});
