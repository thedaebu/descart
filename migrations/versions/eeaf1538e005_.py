"""empty message

Revision ID: eeaf1538e005
Revises: 561cfd0b5793
Create Date: 2023-11-04 13:43:32.471251

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = 'eeaf1538e005'
down_revision = '561cfd0b5793'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('cart', schema=None) as batch_op:
        batch_op.add_column(sa.Column('area_code', sa.String(length=3), nullable=False))
        batch_op.add_column(sa.Column('instagram', sa.String(length=100), nullable=False))
        batch_op.add_column(sa.Column('phone_number', sa.String(length=7), nullable=False))
        batch_op.add_column(sa.Column('zip_code', sa.String(length=5), nullable=False))
        batch_op.alter_column('address',
               existing_type=sa.VARCHAR(length=100),
               type_=sa.String(length=50),
               existing_nullable=False)
        batch_op.alter_column('website',
               existing_type=sa.VARCHAR(length=50),
               nullable=False)
        batch_op.drop_column('phoneNumber')
        batch_op.drop_column('zipCode')
        batch_op.drop_column('areaCode')

    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('cart', schema=None) as batch_op:
        batch_op.add_column(sa.Column('areaCode', sa.VARCHAR(length=3), autoincrement=False, nullable=False))
        batch_op.add_column(sa.Column('zipCode', sa.VARCHAR(length=5), autoincrement=False, nullable=False))
        batch_op.add_column(sa.Column('phoneNumber', sa.VARCHAR(length=7), autoincrement=False, nullable=False))
        batch_op.alter_column('website',
               existing_type=sa.VARCHAR(length=50),
               nullable=True)
        batch_op.alter_column('address',
               existing_type=sa.String(length=50),
               type_=sa.VARCHAR(length=100),
               existing_nullable=False)
        batch_op.drop_column('zip_code')
        batch_op.drop_column('phone_number')
        batch_op.drop_column('instagram')
        batch_op.drop_column('area_code')

    # ### end Alembic commands ###
