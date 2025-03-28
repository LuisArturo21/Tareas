import { Router } from 'express';
import multer from 'multer';
import path from 'path';
import fs from 'fs';

const router = Router();

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'src/public/uploads/');
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + path.extname(file.originalname));
    }
});

const upload = multer({
    storage: storage,
    fileFilter: (req, file, cb) => {
        const filetypes = /jpeg|jpg|png/;
        const mimetype = filetypes.test(file.mimetype);
        const extname = filetypes.test(path.extname(file.originalname).toLowerCase());

        if (mimetype && extname) {
            return cb(null, true);
        } else {
            cb(new Error('Solo se permiten imágenes JPG y PNG'));
        }
    }
});

router.get('/', (req, res) => {
    const uploadDir = path.join(__dirname, '../public/uploads/');
    
    fs.readdir(uploadDir, (err, files) => {
        if (err) {
            return res.status(500).send('Error al cargar imágenes');
        }
        res.render('home', { images: files });
    });
});

// Página de carga de archivos
router.get('/upload', (req, res) => {
    res.render('upload');
});

// Manejo de subida de archivos
router.post('/upload', upload.single('image'), (req, res): void => {
    if (!req.file) {
        res.send('Error: No se subió un archivo o el formato no es válido.');
    } else {
        res.redirect('/');
    }
});

export default router;
