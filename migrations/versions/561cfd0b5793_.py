"""empty message

Revision ID: 561cfd0b5793
Revises: 432c725e327c
Create Date: 2023-10-04 15:20:16.350962

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '561cfd0b5793'
down_revision = '432c725e327c'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('cart', schema=None) as batch_op:
        batch_op.add_column(sa.Column('address', sa.String(length=100), nullable=False))
        batch_op.add_column(sa.Column('areaCode', sa.String(length=3), nullable=False))
        batch_op.add_column(sa.Column('city', sa.String(length=50), nullable=False))
        batch_op.add_column(sa.Column('phoneNumber', sa.String(length=7), nullable=False))
        batch_op.add_column(sa.Column('state', sa.String(length=20), nullable=False))
        batch_op.add_column(sa.Column('status', sa.String(length=10), nullable=False))
        batch_op.add_column(sa.Column('website', sa.String(length=50), nullable=True))
        batch_op.add_column(sa.Column('zipCode', sa.String(length=5), nullable=False))
        batch_op.alter_column('name',
               existing_type=sa.VARCHAR(length=20),
               type_=sa.String(length=50),
               existing_nullable=False)

    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('cart', schema=None) as batch_op:
        batch_op.alter_column('name',
               existing_type=sa.String(length=50),
               type_=sa.VARCHAR(length=20),
               existing_nullable=False)
        batch_op.drop_column('zipCode')
        batch_op.drop_column('website')
        batch_op.drop_column('status')
        batch_op.drop_column('state')
        batch_op.drop_column('phoneNumber')
        batch_op.drop_column('city')
        batch_op.drop_column('areaCode')
        batch_op.drop_column('address')

    # ### end Alembic commands ###