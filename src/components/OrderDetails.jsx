import React, { useState, useEffect } from 'react';
import {
  Form,
  FormGroup,
  Label,
  Input,
  Button,
  Row,
  Col,
  Card,
  CardBody,
  CardTitle,
  CardText,
} from 'reactstrap';
import '../App.css';

export default function OrderBody() {
  const [seciliBoyut, setSeciliBoyut] = useState('');
  const [seciliHamur, setSeciliHamur] = useState('');
  const [seciliMalzemeler, setSeciliMalzemeler] = useState([]);
  const [siparisNotu, setSiparisNotu] = useState('');
  const [siparisMiktari, setSiparisMiktari] = useState(1);
  const [butonAktifMi, setButonAktifMi] = useState(false);

  useEffect(() => {
    // Butonun aktif olabilmesi için aşağıdaki şartların hepsinin sağlanması gerekir:
    const malzemeSecimiGeçerliMi = seciliMalzemeler.length >= 4 && seciliMalzemeler.length <= 10;
    const boyutSecimiGeçerliMi = seciliBoyut !== '';
    const hamurSecimiGeçerliMi = seciliHamur !== ''; // Hamur seçilmeden buton aktif olmasın

    if (malzemeSecimiGeçerliMi && boyutSecimiGeçerliMi && hamurSecimiGeçerliMi) {
      setButonAktifMi(true);
    } else {
      setButonAktifMi(false);
    }
  }, [seciliBoyut, seciliHamur, seciliMalzemeler]);

  const handleBoyutDegistir = (event) => setSeciliBoyut(event.target.value);
  const handleHamurDegistir = (event) => setSeciliHamur(event.target.value);
  const handleMalzemeDegistir = (event) => {
    const { value, checked } = event.target;
    setSeciliMalzemeler((prevMalzemeler) =>
      checked
        ? [...prevMalzemeler, value]
        : prevMalzemeler.filter((malzeme) => malzeme !== value)
    );
  };

  const handleSiparisNotuDegistir = (event) => setSiparisNotu(event.target.value);
  const handleMiktarDegistir = (amount) => {
    setSiparisMiktari((prevMiktar) => Math.max(prevMiktar + amount, 1));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Sipariş verildiğinde yapılacak işlemler
    alert('Sipariş Verildi!');
  };

  return (
    <div className="order-body" style={{ width: '532px', height: '1340.63px' }}>
      <h2 className="text-center">Position Absolute Acı Pizza</h2>
      <p className="text-center">85.50₺</p>
      <Row className="justify-content-center">
        <Col md={8}>
          <Form onSubmit={handleSubmit}>
            {/* Boyut Seç */}
            <FormGroup tag="fieldset">
              <legend>Boyut Seç *</legend>
              <Row>
                {['Küçük', 'Orta', 'Büyük'].map((boyutSecenek, index) => (
                  <Col md={4} key={index}>
                    <FormGroup check>
                      <Label check>
                        <Input
                          type="radio"
                          name="boyut"
                          value={boyutSecenek}
                          checked={seciliBoyut === boyutSecenek}
                          onChange={handleBoyutDegistir}
                        />{' '}
                        {boyutSecenek}
                      </Label>
                    </FormGroup>
                  </Col>
                ))}
              </Row>
            </FormGroup>

            {/* Hamur Seç (Select) */}
            <FormGroup>
              <Label for="hamurSelect">Hamur Seç *</Label>
              <Input
                type="select"
                id="hamurSelect"
                value={seciliHamur}
                onChange={handleHamurDegistir}
              >
                <option value="">Hamur Kalınlığı Seçin</option>
                <option value="İnce">İnce</option>
                <option value="Orta">Orta</option>
                <option value="Kalın">Kalın</option>
              </Input>
            </FormGroup>

            {/* Ek Malzemeler */}
            <FormGroup>
              <legend>Ek Malzemeler</legend>
              <p>En Fazla 10 malzeme seçebilirsiniz. 5₺</p>
              <Row>
                {[
                  'Pepperoni',
                  'Domates',
                  'Biber',
                  'Sosis',
                  'Mısır',
                  'Sucuk',
                  'Kanada Jambonu',
                  'Ananas',
                  'Tavuk Parça',
                  'Jalapeno',
                  'Kabak',
                  'Soğan',
                  'Sarımsak',
                ].map((malzeme, index) => (
                  <Col md={4} key={index}>
                    <FormGroup check>
                      <Label check>
                        <Input
                          type="checkbox"
                          value={malzeme}
                          checked={seciliMalzemeler.includes(malzeme)}
                          onChange={handleMalzemeDegistir}
                          disabled={seciliMalzemeler.length >= 10 && !seciliMalzemeler.includes(malzeme)} // En fazla 10 malzeme seçilebilir
                        />{' '}
                        {malzeme}
                      </Label>
                    </FormGroup>
                  </Col>
                ))}
              </Row>
            </FormGroup>

            {/* Sipariş Notu */}
            <FormGroup>
              <Label for="siparisNotu">Sipariş Notu</Label>
              <Input
                type="textarea"
                id="siparisNotu"
                placeholder="Siparişine eklemek istediğin bir not var mı?"
                value={siparisNotu}
                onChange={handleSiparisNotuDegistir}
              />
            </FormGroup>

            {/* Sipariş Özeti ve Toplam */}
            <Row>
              <Col md={6}>
                <div className="order-summary">
                  <Button
                    color="warning"
                    onClick={() => handleMiktarDegistir(-1)}
                    disabled={siparisMiktari === 1}
                  >
                    -
                  </Button>
                  <span className="quantity">{siparisMiktari}</span>
                  <Button color="warning" onClick={() => handleMiktarDegistir(1)}>
                    +
                  </Button>
                </div>
              </Col>
              <Col md={6}>
                <Card>
                  <CardBody>
                    <CardTitle>Sipariş Toplamı</CardTitle>
                    <CardText>Seçimler: 25.00₺</CardText>
                    <CardText>Toplam: 110.50₺</CardText>
                  </CardBody>
                </Card>
              </Col>
            </Row>

            {/* Sipariş Ver Butonu */}
            <div className="text-center mt-4">
              <Button
                color="warning"
                className="px-5 py-3"
                type="submit"
                disabled={!butonAktifMi}
                style={{ backgroundColor: '#FDC913' }}
              >
                SİPARİŞ VER
              </Button>
            </div>
          </Form>
        </Col>
      </Row>
    </div>
  );
}