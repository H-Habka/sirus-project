import { React , useState} from 'react';
import { Container } from 'react-bootstrap';
import AccountHeader from '../../components/Headers/AccountHeader/AccountHeader.component';

const Account = (props) => {
  const [form , setForm] = useState();
  return (
    <>
      <Container fluid>
        <AccountHeader onChange={setForm}></AccountHeader>
      </Container>
      <Container fluid className="bg-gray border mt-5 p-lg-5 p-1 ">
        { form ? form : props.children}

      </Container>
    </>
  );
};

export default Account;
