import { Container } from 'reactstrap'
import styles from './styles.module.scss'
import { BsWhatsapp } from "react-icons/bs";
import { HiOutlineMail } from "react-icons/hi";
import { FaLinkedinIn } from "react-icons/fa";
import Link from 'next/link';
import { FormEvent, useRef } from 'react';
import emailjs from '@emailjs/browser';

export const Contact = () => {
  const form = useRef<HTMLFormElement>(null);
  const sendEmail = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    emailjs.sendForm('service_qcpbeoc', 'template_8d31y8i', form.current!, 'ZpOL7COlMWq-Iwdm3')
      .then(() => {
          const resetForm = e.target as HTMLFormElement;
          resetForm.reset()
      }, (error) => {
          console.log(error.text);
      })
  }

  return (
    <>
      <div className={styles.contact} id='contato'>
        <Container>
          <p className={styles.title}>Contato</p>
          <p className={styles.subTitle}>Entrar em contato</p>

          <div className={styles.containerContact}>
            <div className={styles.contactList}>

              <div className={styles.contactListItem}>
                <Link href="https://wa.me/5511960693921?text=Ol%C3%A1+Guilherme%2C+tudo+bem+%3F" target={"_blank"}>
                  <BsWhatsapp className={styles.icon}/>
                </Link>
                <div className={styles.contactData}>
                  <p className={styles.titleContact}>WhatsApp</p>
                  <p className={styles.subContact}>(+55) 11 96069-3921</p>
                </div>
              </div>

              <div className={styles.contactListItem}>
                <Link href="mailto:Guime0162@gmail.com" target={"_blank"}>
                  <HiOutlineMail className={styles.icon}/>
                </Link>
                <div className={styles.contactData}>
                  <p className={styles.titleContact}>Email</p>
                  <p className={styles.subContact}>Guime0162@gmail.com</p>
                </div>
              </div>

              <div className={styles.contactListItem}>
                <Link href="https://www.linkedin.com/in/guilherme-gon%C3%A7alves-lisboa-abb8b0227/" target={"_blank"}>
                  <FaLinkedinIn className={styles.icon}/>
                </Link>
                <div className={styles.contactData}>
                  <p className={styles.titleContact}>LinkedIn</p>
                  <p className={styles.subContact}>Guilherme Gonçalves Lisboa</p>
                </div>
              </div>
            </div>
              <form ref={form} onSubmit={sendEmail} className={styles.form}>
                <input type="text" name='name' placeholder='Seu nome completo' required className={styles.input}/>
                <input type="email" name='email' placeholder='Seu Email' required className={styles.input}/>
                <textarea name="message" placeholder='Sua mensagem' rows={7} required className={styles.textarea}></textarea>
                <button type='submit' className="button button-lg">Enviar</button>
              </form>
          </div>

        </Container>
      </div>
    </>
  )
}