import 'package:flutter/material.dart';
import 'package:login_and_signup/myscans.dart';
import 'body.dart';

import 'dart:developer';
import 'dart:io';
import 'package:flutter/foundation.dart';
import 'package:qr_code_scanner/qr_code_scanner.dart';

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
            'Home',
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
                      builder: (context) => QRViewExample(),
                    ));
                  },
                  child: Container(
                      alignment: Alignment.center,
                      width: 350,
                      height: 150,
                      child: Text('Scan QR Code'),
                      color: Color(0xFFF3D657)),
                ),
                SizedBox(height: 20),
                GestureDetector(
                  onTap: () {
                    Navigator.of(context).push(MaterialPageRoute(
                      builder: (context) => MyScans(),
                    ));
                  },
                  child: Container(
                    alignment: Alignment.center,
                    width: 350,
                    height: 150,
                    child: Text('My Scan'),
                    color: Color(0xFFF3D657),
                  ),
                ),
                SizedBox(height: 20),
                // GestureDetector(
                //   onTap: () {
                //     Navigator.of(context).push(MaterialPageRoute(
                //       builder: (context) => Body(),
                //     ));
                //   },
                //   child: Container(
                //     alignment: Alignment.center,
                //     width: 350,
                //     height: 150,
                //     child: Text('Product Details'),
                //     color: Color(0xFFF3D657),
                //   ),
                // ),
              ],
            ),
          ),
        ));
  }
}

class QRViewExample extends StatefulWidget {
  @override
  State<StatefulWidget> createState() => _QRViewExampleState();
}

class _QRViewExampleState extends State<QRViewExample> {
  Barcode? result;
  Barcode? lastResult;
  QRViewController? controller;
  final GlobalKey qrKey = GlobalKey(debugLabel: 'QR');

  // In order to get hot reload to work we need to pause the camera if the platform
  // is android, or resume the camera if the platform is iOS.
  @override
  void reassemble() {
    super.reassemble();
    if (Platform.isAndroid) {
      controller!.pauseCamera();
    }
    controller!.resumeCamera();
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: Column(
        children: <Widget>[
          Expanded(flex: 4, child: _buildQrView(context)),
          Expanded(
            flex: 1,
            child: FittedBox(
              fit: BoxFit.none,
              child: Column(
                mainAxisAlignment: MainAxisAlignment.spaceEvenly,
                children: <Widget>[
                  if (result != null)
                    Text(
                        'Barcode Type: ${describeEnum(result!.format)}   Data: ${result!.code}')
                  else
                    Text('Scan a code'),
                ],
              ),
            ),
          )
        ],
      ),
    );
  }

  void _navigateToMainPage(String code) {
    Navigator.of(context)
        .push(MaterialPageRoute(builder: (context) => Body(code: code)));
  }

  Widget _buildQrView(BuildContext context) {
    // For this example we check how width or tall the device is and change the scanArea and overlay accordingly.
    var scanArea = (MediaQuery.of(context).size.width < 400 ||
            MediaQuery.of(context).size.height < 400)
        ? 150.0
        : 300.0;
    // To ensure the Scanner view is properly sizes after rotation
    // we need to listen for Flutter SizeChanged notification and update controller
    return QRView(
      key: qrKey,
      onQRViewCreated: _onQRViewCreated,
      overlay: QrScannerOverlayShape(
          borderColor: Colors.red,
          borderRadius: 10,
          borderLength: 30,
          borderWidth: 10,
          cutOutSize: scanArea),
      onPermissionSet: (ctrl, p) => _onPermissionSet(context, ctrl, p),
    );
  }

  void _onQRViewCreated(QRViewController controller) {
    setState(() {
      this.controller = controller;
    });
    controller.scannedDataStream.listen((scanData) {
      setState(() {
        lastResult = result;
        result = scanData;
        if (result?.code != lastResult?.code) {
          lastResult = null;
          _navigateToMainPage(scanData.code);
        }
      });
    });
  }

  void _onPermissionSet(BuildContext context, QRViewController ctrl, bool p) {
    log('${DateTime.now().toIso8601String()}_onPermissionSet $p');
    if (!p) {
      ScaffoldMessenger.of(context).showSnackBar(
        SnackBar(content: Text('no Permission')),
      );
    }
  }

  @override
  void dispose() {
    controller?.dispose();
    super.dispose();
  }
}
