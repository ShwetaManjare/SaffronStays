import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import { Pagination, Autoplay } from 'swiper/modules';
import { Card, CardContent, CardMedia, Typography, Box } from '@mui/material';

const reviews = [
  { name: "Aarav Sharma", photo: "https://randomuser.me/api/portraits/men/81.jpg", place: "Mahabaleshwar", review: "Amazing experience! The view was breathtaking, and the hospitality was top-notch. The scenic beauty, cozy accommodations, and warm hospitality make it a perfect weekend escape.", rating: "★★★★★" },
  { name: "Neha Patel", photo: "https://randomuser.me/api/portraits/women/65.jpg", place: "Lonavala", review: "A perfect getaway! Loved the peaceful environment and well-maintained camps. the surroundings are serene.", rating: "★★★★★" },
  { name: "Raj Malhotra", photo: "https://randomuser.me/api/portraits/men/75.jpg", place: "Panchgani", review: "Great camping site with all necessary amenities. delicious local food. A must-visit for anyone looking to reconnect with nature.!", rating: "★★★★☆" },
  { name: "Priya Verma", photo: "https://randomuser.me/api/portraits/women/48.jpg", place: "Alibaug", review: "The bonfire night was unforgettableAway from the hustle and bustle,adventure. The bonfire nights and stargazing were the highlights of our trip!", rating: "★★★★★" },
  { name: "Karan Mehta", photo: "https://randomuser.me/api/portraits/men/50.jpg", place: "Matheran", review: "Nice experience but could improve food variety.From thrilling treks to cozy stays. The perfect spot for families, friends, or solo travelers seeking adventure with comfort.", rating: "★★★★☆" },
  { name: "Simran Kaur", photo: "https://randomuser.me/api/portraits/women/35.jpg", place: "Kashid Beach", review: "Loved every moment of our stay!  Perfect for a weekend escape.Highly recommended for nature lovers.Camping offers a perfect blend of nature, comfort, and adventure.", rating: "★★★★★" },
  { name: "Vikram Joshi", photo: "https://randomuser.me/api/portraits/men/60.jpg", place: "Harihareshwar", review: "Affordable and well-maintained. Perfect for a weekend escape. The view was breathtaking, and the hospitality was top-notch.", rating: "★★★★☆" },
  { name: "Ananya Dixit", photo: "https://randomuser.me/api/portraits/women/29.jpg", place: "Tarkarli", review: "Best camping experience ever! The view was breathtaking, and the hospitality was top-notch. The treehouse stay was unique.", rating: "★★★★★" }
];

export default function ReviewSlider() {
  return (
    <Box sx={{ maxWidth: '1300px', mx: 'auto', py: 5, px: 3, background: 'linear-gradient(to right, #FFEBB2, #f5ede1)', borderRadius: 3, boxShadow: 10 }}>
      {/* <Typography variant="h4" align="center" color="primary" fontWeight={700} mb={3}>
        What Our Guests Say
      </Typography> */}
      <Swiper
        modules={[Pagination, Autoplay]}
        spaceBetween={20}
        slidesPerView={1}
        pagination={{ clickable: true }}
        autoplay={{ delay: 2500, disableOnInteraction: false }}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        className="pb-10"
      >
        {reviews.map((review, index) => (
          <SwiperSlide key={index}>
            <Card sx={{ p: 3, boxShadow: 4, borderRadius: 3, height: 320, display: 'flex', flexDirection: 'column', justifyContent: 'space-between', backgroundColor: '#fff' }}>
              <CardContent sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '100%' }}>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                  <CardMedia component="img" image={review.photo} alt={review.name} sx={{ width: 70, height: 70, borderRadius: '50%', border: '3px solid #FF9800', mr: 2 }} />
                  <Box>
                    <Typography variant="h6" color="textPrimary" fontWeight={600}>{review.name}</Typography>
                    <Typography variant="body2" color="textSecondary" fontStyle="italic">{review.place}</Typography>
                    <Typography variant="body1" color="warning.main" fontSize={18}>{review.rating}</Typography>
                  </Box>
                </Box>
                <Typography variant="body1" color="textSecondary" fontStyle="italic">
                  "{review.review}"
                </Typography>
              </CardContent>
            </Card>
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
}



