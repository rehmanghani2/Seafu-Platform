import 'package:flutter_test/flutter_test.dart';
import 'package:mobile/main.dart';

void main() {
  testWidgets('SeafuApp smoke test renders navigation', (WidgetTester tester) async {
    await tester.pumpWidget(const SeafuApp());
    expect(find.text('Courses'), findsOneWidget);
    expect(find.text('Vault'), findsOneWidget);
  });
}
