import Footer from '../src/components/Footer/Footer';
import Header from '../src/components/Header/Header';
import Menu from '../src/components/Menu/Menu';
import Speaker from '../src/components/Speaker/Speaker';
import SpeakerSearchBar from '../src/components/SpeakerSearchBar/SpeakerSearchBar';
function Page() {
  return (
    <div>
      <Header />
      <Menu />
      <SpeakerSearchBar />
      <SpeakerV2 />
      <Footer />
    </div>
  );
}
export default Page;
