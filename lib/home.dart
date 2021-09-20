import 'package:flutter/material.dart';
import 'body.dart';

void main() {
  runApp(MaterialApp(home: MyApp()));
}

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
        appBar: AppBar(
          backgroundColor: Color(0xFFF3D657),
          leading: IconButton(
            icon: Icon(Icons.menu),
            onPressed: () {},
            color: Colors.black,
          ),
          title: new Text(
            'My Scans',
            style: TextStyle(color: Colors.black),
          ),
          actions: [
            IconButton(
              icon: Icon(Icons.search),
              onPressed: () {},
              color: Colors.black,
            ),
            IconButton(
              icon: Icon(Icons.more_vert),
              onPressed: () {},
              color: Colors.black,
            ),
          ],
        ),
        backgroundColor: Colors.black,
        body: Center(
          child: InkWell(
            child: Column(
              mainAxisAlignment: MainAxisAlignment.center,
              children: [
                GestureDetector(
                  onTap: () {
                    Navigator.of(context).push(MaterialPageRoute(
                      builder: (context) => Body(),
                    ));
                  },
                  child: Container(
                      alignment: Alignment.center,
                      width: 350,
                      height: 150,
                      child: Text('Product Details'),
                      color: Color(0xFFF3D657)),
                ),
                SizedBox(height: 20),
                GestureDetector(
                  onTap: () {
                    Navigator.of(context).push(MaterialPageRoute(
                      builder: (context) => Body(),
                    ));
                  },
                  child: Container(
                    alignment: Alignment.center,
                    width: 350,
                    height: 150,
                    child: Text('Product Details'),
                    color: Color(0xFFF3D657),
                  ),
                ),
                SizedBox(height: 20),
                GestureDetector(
                  onTap: () {
                    Navigator.of(context).push(MaterialPageRoute(
                      builder: (context) => Body(),
                    ));
                  },
                  child: Container(
                    alignment: Alignment.center,
                    width: 350,
                    height: 150,
                    child: Text('Product Details'),
                    color: Color(0xFFF3D657),
                  ),
                ),
              ],
            ),
          ),
        ));
  }
}
