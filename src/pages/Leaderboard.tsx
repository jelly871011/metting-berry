import React, { useEffect, useState } from 'react';
import '@/assets/styles/Leaderboard.css';
import Container from '../components/Container';
import Footer from '../components/Footer';
import Card from '../components/Card';
import { collection, getDocs, query, orderBy, limit } from 'firebase/firestore';
import { db } from '../firebase';

const Leaderboard: React.FC = () => {
  const [records, setRecords] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchData = async () => {
      const q = query(collection(db, 'leaderboard'), orderBy('totalScore', 'desc'), limit(50));
      const querySnapshot = await getDocs(q);
      setRecords(querySnapshot.docs.map(doc => doc.data()));
      setLoading(false);
    };
    fetchData();
  }, []);

  if (loading) {
    return (
      <Container>
        <Card type="title" title="排行榜">
          <div style={{display:'flex',justifyContent:'center',alignItems:'center',height:'30vh'}}>
            <span style={{fontSize:'1.2rem',color:'#888'}}>載入中...</span>
          </div>
        </Card>
        <Footer />
      </Container>
    );
  }

  if (!records || records.length === 0) {
    return (
      <Container>
        <Card type="title" title="排行榜">
          <div style={{display:'flex',justifyContent:'center',alignItems:'center',height:'30vh'}}>
            <span style={{fontSize:'1.2rem',color:'#888'}}>暫無資料</span>
          </div>
        </Card>
        <Footer />
      </Container>
    );
  }

  return (
    <Container>
      <Card type="title" title="排行榜">
        <div className="ranking-list">
          {records.slice(0, 30).map((rec, idx) => (
            <div className="ranking-list-item" key={rec.id || idx}>
              <span className="ranking-index">{idx + 1}</span>
              <span className="ranking-player" title={rec.playerName || '匿名莓'}>{rec.playerName || '匿名莓'}</span>
              <span className="ranking-score-main">{rec.totalScore}</span>
              <div className="ranking-detail">
                <div>理智：{rec.sanity}</div>
                <div>裝忙：{rec.busy}</div>
                <div>壓力：{rec.stress}</div>
              </div>
            </div>
          ))}
        </div>
      </Card>
      <Footer />
    </Container>
  );
};

export default Leaderboard;
