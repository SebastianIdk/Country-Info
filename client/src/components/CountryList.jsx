import { useEffect, useState } from 'react';
import axios from 'axios';
import {
  Box,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  CircularProgress,
  Button
} from '@mui/material';
import { motion } from 'framer-motion';

export default function CountryList() {
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [importing, setImporting] = useState(false);

  const fetchCountries = () => {
    setLoading(true);
    axios.get('http://localhost:3000/api/paises')
      .then(res => setCountries(res.data))
      .catch(err => console.error(err))
      .finally(() => setLoading(false));
  };

  const handleImport = () => {
    setImporting(true);
    axios.get('http://localhost:3000/api/paises/importar')
      .then(() => fetchCountries())
      .catch(err => console.error(err))
      .finally(() => setImporting(false));
  };

  useEffect(() => {
    fetchCountries();
  }, []);

  return (
    <Box sx={{ p: 4 }}>
      <motion.div initial={{ opacity: 0, y: -30 }} animate={{ opacity: 1, y: 0 }}>
        <Typography variant="h3" align="center" gutterBottom>
          🌍 Países guardados
        </Typography>
      </motion.div>

      <Box textAlign="center" mb={3}>
        <Button
          variant="contained"
          color="primary"
          onClick={handleImport}
          disabled={importing}
        >
          {importing ? 'Importando...' : 'Importar países'}
        </Button>
      </Box>

      {loading
        ? (
          <Box display="flex" justifyContent="center" mt={8}>
            <CircularProgress />
          </Box>
        )
        : (
          <TableContainer component={Paper} elevation={2}>
            <Table>
              <TableHead sx={{ backgroundColor: '#1976d2' }}>
                <TableRow>
                  {['Bandera', 'Nombre', 'Capital', 'Región'].map((h, i) => (
                    <TableCell key={i} sx={{ color: 'white', fontWeight: 500 }}>
                      {h}
                    </TableCell>
                  ))}
                </TableRow>
              </TableHead>
              <TableBody>
                {countries.map((c, i) => (
                  <motion.tr
                    key={c.name + i}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: i * 0.02 }}
                    style={{ display: 'table-row' }}
                  >
                    <TableCell>
                      <img
                        src={c.flagUrl}
                        alt={c.name}
                        style={{ width: 50, borderRadius: 4 }}
                      />
                    </TableCell>
                    <TableCell>{c.name}</TableCell>
                    <TableCell>{c.capital}</TableCell>
                    <TableCell>{c.region}</TableCell>
                  </motion.tr>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        )
      }
    </Box>
  );
}
