import 'dart:developer';
import 'dart:io';

import 'package:flutter/foundation.dart';
import 'package:flutter/material.dart';
import 'product_details.dart';
import 'package:qr_code_scanner/qr_code_scanner.dart';
import 'package:flutter/foundation.dart';
import 'package:http/http.dart' as http;
import 'dart:convert';
import 'package:json_annotation/json_annotation.dart';

@JsonSerializable()
class Product {
  final int Id;
  final String ManufactrerName;
  final String ProductName;
  final int Price;
  final String SerialCode;

  Product({
    required this.Id,
    required this.ManufactrerName,
    required this.ProductName,
    required this.Price,
    required this.SerialCode,
  });

  factory Product.fromJson(Map<String, dynamic> json) {
    return Product(
      Id: json['Id'],
      ManufactrerName: json['ManufactrerName'],
      ProductName: json['ProductName'],
      Price: json['Price'],
      SerialCode: json['SerialCode'],
    );
  }
}

class MyScans extends StatefulWidget {
  @override
  _MyScansState createState() => _MyScansState();
}

class _MyScansState extends State<MyScans> {
  late Future<Product> product;

  @override
  void initState() {
    super.initState();
    setState(() {
      product = _fetchData();
    });
  }

  Future<Product> _fetchData() async {
    try {
      print('http://192.168.0.119:3010/getProducts');
      final response =
          await http.get(Uri.parse('http://192.168.0.119:3010/getProducts'));
      print(response.statusCode);
      if (response.statusCode == 200) {
        print(json.decode(response.body));
        return Product.fromJson(jsonDecode(response.body)[0]);
      } else {
        throw Exception("Failed to load data");
      }
    } catch (error, st) {
      print(error);
      print(st);
      throw error;
    }
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
        appBar: AppBar(
          backgroundColor: Color(0xFFF3D657),
          title: new Text(
            'My Scans',
            style: TextStyle(color: Colors.black),
          ),
        ),
        backgroundColor: Colors.white,
        body: Padding(
          padding: const EdgeInsets.all(8.0),
          child: Column(
              crossAxisAlignment: CrossAxisAlignment.stretch,
              mainAxisAlignment: MainAxisAlignment.start,
              children: [
                FutureBuilder<Product>(
                  future: product,
                  builder: (context, snapshot) {
                    if (snapshot.hasData) {
                      return Text(
                        'Product Name: ${snapshot.data!.ProductName}',
                        style: TextStyle(
                          fontSize: 22,
                          color: Color(0xFF1C1C1C),
                          height: 2,
                        ),
                        textAlign: TextAlign.left,
                      );
                    } else if (snapshot.hasError) {
                      return Text(
                        '${snapshot.error}',
                        style: TextStyle(
                          fontSize: 16,
                          color: Color(0xFF1C1C1C),
                          height: 2,
                        ),
                        textAlign: TextAlign.left,
                      );
                    }

                    // By default, show a loading spinner.
                    return const CircularProgressIndicator();
                  },
                ),
              ]),
        ));
  }
}

/// Wrapper for stateful functionality to provide onInit calls in stateles widget
class StatefulWrapper extends StatefulWidget {
  final Function onInit;
  final Widget child;
  const StatefulWrapper({required this.onInit, required this.child});
  @override
  _StatefulWrapperState createState() => _StatefulWrapperState();
}

class _StatefulWrapperState extends State<StatefulWrapper> {
  @override
  void initState() {
    widget.onInit();
    super.initState();
  }

  @override
  Widget build(BuildContext context) {
    return widget.child;
  }
}
